# COM214-PA4 — Rails Portfolio (extended for AT101 Creative Code)

A Ruby on Rails portfolio site originally built for **COM214 — Web Technologies & Development** and later **extended for AT101 — Creative Code** with weekly project pages (Weeks 1–10).

**Live Deployments**  
- **Custom domain (Cloudflare → Heroku)**: https://lianabourdon.com  
- **Heroku app**: https://lianabourdon-c84f221a058a.herokuapp.com/

## Features

- Ruby **3.2.3**, Rails **7.2.2.1**
- Bootstrap **5.3** & Font Awesome icons
- Sprockets asset pipeline; ERB views
- **AT101 Creative Code section** with 10 weeks of assignments  
  - Artist Statement only on Week 2  
  - Navigation buttons (Back to AT101, Prev, Next) consistent across all weeks
- Deployed on **Heroku**; proxied via **Cloudflare** to custom domain

> **AT101 visibility:** The AT101 section is **public**. No login is required at the moment.  
> If you prefer, you can enable HTTP Basic authentication with environment variables (see below).

## Structure

**Controllers & routes**
- `ProfileController` → standard portfolio pages (`/`, `/coding`, `/design`, `/photography`, `/music`)
- `CreativeCodeController` → AT101 section
  - `/at101` → index/cards
  - `/at101/weeks/:id` → week detail (1–10)

**Views**
```
app/views/profile/*                
app/views/creative_code/index.html.erb
app/views/creative_code/weeks/1.html.erb ... 10.html.erb
app/views/creative_code/_week_header.html.erb   # shared nav partial
```

## Local Development

```bash
git clone https://github.com/lianabourdon/COM214-PA4.git
cd COM214-PA4
bundle install
bin/rails s
# visit http://localhost:3000
```

## Deploying to Heroku

**One-time setup**
```bash
# ensure Procfile exists
echo 'web: bundle exec puma -C config/puma.rb' > Procfile

# create the app (if not already done)
heroku create lianabourdon

# set master key so credentials work
heroku config:set RAILS_MASTER_KEY="$(cat config/master.key)" -a lianabourdon

# optional: serve static and log to stdout
heroku config:set RAILS_SERVE_STATIC_FILES=1 RAILS_LOG_TO_STDOUT=1 -a lianabourdon
```

**Deploy changes**
```bash
git push heroku main
heroku open -a lianabourdon
heroku logs -t -a lianabourdon
```

## Custom Domain with Cloudflare

1. Add domain in Heroku:  
   ```bash
   heroku domains:add lianabourdon.com -a lianabourdon
   heroku certs:auto:enable -a lianabourdon
   ```
   Copy the Heroku DNS Target (e.g., `example.herokudns.com`).

2. In Cloudflare:  
   - DNS → add CNAME for `lianabourdon.com` pointing to the Heroku DNS Target  
   - Proxied (orange cloud) ON

3. SSL/TLS mode: **Full**

4. Purge Cloudflare cache.

Test at https://lianabourdon.com

**Enable**
```bash
heroku config:set AT101_USER=admin AT101_PASS=SecretPass -a lianabourdon
```

**Disable**
```bash
heroku config:unset AT101_USER AT101_PASS -a lianabourdon
```

## Maintenance

**Zip up a clean copy (exclude junk)**  
```bash
zip -r COM214-PA4.zip COM214-PA4   -x "COM214-PA4/tmp/*" "COM214-PA4/log/*" "COM214-PA4/cache/*"      "COM214-PA4/test/*" "COM214-PA4/tmp/cache/*" "COM214-PA4/tmp/cache/bootsnap/*"      "COM214-PA4/node_modules/*" "COM214-PA4/.git/*" "COM214-PA4/.bundle/*"      "COM214-PA4/vendor/bundle/*" "COM214-PA4/.cache/*"      "*.gz" "*.zip" "*.tar" "*.bak" "*.backup" "*.bk" "*.old"
```

**Update week content**
```bash
git add app/views/creative_code/weeks/2.html.erb
git commit -m "Update Week 2 content"
git push heroku main
```

## Credits

- Built for **COM214** at Connecticut College, extended for **AT101 Creative Code (Fall 2025)**.  
- Hosted at **Heroku** with Cloudflare custom domain integration.  
- Navigation and page styling inspired by Cargo/portfolio layouts.

