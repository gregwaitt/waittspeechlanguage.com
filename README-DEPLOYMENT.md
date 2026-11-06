# Waitt Speech & Language — Porkbun Static Hosting

This production candidate preserves the browser-exported Wix page layout while running without Wix services. The images and CSS are included locally. The only required outside request is the Web3Forms API when the visitor submits the contact form. No runtime scripts, stylesheets, or fonts are loaded from Wix.

## Important font/layout note

The original site used fonts served by Wix, including proprietary typefaces. To avoid distributing or depending on font files with unknown redistribution rights, this package uses browser-safe Arial and Georgia substitutes. Small font widths and line wraps may differ from the Wix original, even though all positioning, sections, colors, and images are preserved. An exact typographic match requires separately licensed local fonts.

## Test

1. Unzip this package and run `python3 -m http.server 8000` inside the folder, or open `index.html` locally.
2. Visit `/` and `/contact.html`, test the navigation, graphics, responsive sizing, email/phone links, and the form.
3. The user previously confirmed one successful Web3Forms email delivery on the earlier version. This revised package has not been subjected to a new real-world submission test.
4. Verify the site in mobile view and compare page appearance with Wix before publishing.

## Deploy

1. Activate Porkbun Static Hosting for the domain; retain Wix while testing.
2. Upload the **contents** of the archive to the web root, with `index.html` at root.
3. Test the Porkbun preview or temporary URL with HTTPS and contact form.
4. Back up DNS records. Change only website A/AAAA/CNAME records according to Porkbun's instructions; preserve Google Workspace MX, SPF, DKIM, DMARC and any verification TXT records.
5. Confirm both `www.waittspeechlanguage.com` and the root domain work, test Contact form and mobile layout, then cancel Wix.

## Form

The HTML POST/fetch sends directly to Web3Forms and displays an inline result. Its public access key is in HTML, which is expected for Web3Forms. The `botcheck` honeypot is present. The form is for general inquiries, not patient medical information.

## What remains from Wix?

Some HTML classes and CSS variables are named `wixui-*` because they came from the original browser export. These are local style selectors, not a network or service dependency. They can be rewritten later without affecting the operation of this site.

## Limits

The current build is a static-site migration candidate and not a new handcrafted semantic/theme framework. A local automated file/dependency audit was performed; live hosting/DNS, mobile screenshots, and Web3Forms delivery after deployment must be verified by the owner.
