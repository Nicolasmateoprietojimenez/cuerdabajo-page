# Despliegue — cuerdabajo.com

Sitio **estático** (Astro). El flujo es: haces `push` a la rama **`produccion`** →
GitHub Actions compila y sube el `dist/` a tu VPS por SSH (rsync) → nginx lo sirve.

## 1) Subir el repo (una sola vez)

```bash
git add .
git commit -m "Sitio Cuerdabajo"
git branch -M main
git remote add origin git@github.com:Nicolasmateoprietojimenez/cuerdabajo-page.git
git push -u origin main

# rama de producción (dispara el deploy)
git checkout -b produccion
git push -u origin produccion
```

De ahí en adelante, para publicar cambios:
```bash
git checkout produccion
git merge main        # o trabaja directo en produccion
git push              # esto despliega solo
```

## 2) DNS en Spaceship (dominio cuerdabajo.com)

En el panel de Spaceship → Advanced DNS, crea:

| Tipo | Host | Valor              |
|------|------|--------------------|
| A    | @    | IP_DE_TU_VPS       |
| A    | www  | IP_DE_TU_VPS       |

(Elimina registros de "parking" que traiga por defecto.) Propaga en minutos/horas.

## 3) Preparar el VPS (una sola vez)

```bash
# como root o con sudo
apt update && apt install -y nginx rsync
mkdir -p /var/www/cuerdabajo
chown -R $USER:$USER /var/www/cuerdabajo

# nginx
cp deploy/nginx-cuerdabajo.conf /etc/nginx/sites-available/cuerdabajo.com
ln -s /etc/nginx/sites-available/cuerdabajo.com /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

# SSL gratis (después de que el DNS apunte al VPS)
apt install -y certbot python3-certbot-nginx
certbot --nginx -d cuerdabajo.com -d www.cuerdabajo.com
```

### Llave SSH de despliegue (para GitHub Actions)
En el VPS:
```bash
ssh-keygen -t ed25519 -f ~/.ssh/deploy_cuerdabajo -N ""
cat ~/.ssh/deploy_cuerdabajo.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/deploy_cuerdabajo        # <-- copia esta LLAVE PRIVADA para el secret
```

## 4) Secrets en GitHub

Repo → Settings → Secrets and variables → Actions → New repository secret:

| Secret        | Valor                                        |
|---------------|----------------------------------------------|
| VPS_HOST      | IP o host del VPS                            |
| VPS_USER      | usuario SSH (ej. `root` o `deploy`)          |
| VPS_PATH      | `/var/www/cuerdabajo`                        |
| VPS_SSH_KEY   | contenido de la llave PRIVADA `deploy_cuerdabajo` |
| VPS_PORT      | (opcional) puerto SSH; por defecto 22        |

## 5) Listo

Cada `push` a `produccion` compila y publica en cuerdabajo.com automáticamente.
Puedes lanzarlo a mano en GitHub → Actions → "Deploy a producción" → Run workflow.
