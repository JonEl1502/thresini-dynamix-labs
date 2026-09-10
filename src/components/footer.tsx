import Link from "next/link";
import Triad from "@/components/triad";
import { PRODUCTS } from "@/data/products";
import { FOOTER_GROUPS, SITE } from "@/data/site";
import s from "./footer.module.css";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className="shell">
        <div className="tick-rule" />

        {/* The colour key, stated once, so every coloured glyph above it is
            decodable. */}
        <div className={s.key}>
          {PRODUCTS.map((p) => (
            <span key={p.slug} className={s.keyItem}>
              <span className={s.keyDot} style={{ background: p.color }} />
              {p.name} · {p.category}
            </span>
          ))}
        </div>

        <div className={s.top}>
          <div className={s.brandBlock}>
            <span className={s.brandRow}>
              {/* Footer glyph: the standalone triad, fully lit. */}
              <Triad size={22} system />
              <span className={s.wordmark}>{SITE.wordmark}</span>
            </span>
            <p className={s.blurb}>{SITE.positioning}</p>
            <p className={s.blurb}>{SITE.territories}</p>
            <p className={s.fineprint}>{SITE.base}</p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className={s.groupTitle}>{group.title}</h2>
              <ul className={s.groupList}>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={s.groupLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="hair" />

        <div className={s.bottom}>
          <p>
            © {new Date().getFullYear()} {SITE.company}
          </p>
          <p>{SITE.territories}</p>
          <p className={s.quiet}>{SITE.base}</p>
          <a href={`mailto:${SITE.email}`} className={`${s.mail} ${s.spacer}`}>
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
