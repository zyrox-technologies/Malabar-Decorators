import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-inverse-surface pt-space-3xl pb-space-lg text-surface-bright" id="contact">
            <div className="max-w-max-width mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-desktop">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-space-3xl">
                    {/* Brand Column (5 cols) */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="font-headline-md text-headline-md tracking-tight text-surface-bright font-medium block">
                            Malabar Decorators
                        </Link>
                        <p className="font-body-sm text-body-sm text-surface-bright/70 max-w-sm leading-relaxed">
                            Curating exceptional celebration environments and culinary experiences across Kerala with dedication to craftsmanship and hospitality.
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                            <a aria-label="Instagram" className="w-10 h-10 rounded-full border border-surface-bright/20 flex items-center justify-center text-surface-bright/80 hover:bg-surface-bright/10 hover:text-surface-bright transition-colors" href="#">
                                <span className="material-symbols-outlined text-lg">photo_camera</span>
                            </a>
                            <a aria-label="Facebook" className="w-10 h-10 rounded-full border border-surface-bright/20 flex items-center justify-center text-surface-bright/80 hover:bg-surface-bright/10 hover:text-surface-bright transition-colors" href="#">
                                <span className="material-symbols-outlined text-lg">thumb_up</span>
                            </a>
                            <a aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-surface-bright/20 flex items-center justify-center text-surface-bright/80 hover:bg-surface-bright/10 hover:text-surface-bright transition-colors" href="#">
                                <span className="material-symbols-outlined text-lg">chat</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column (3 cols) */}
                    <div className="md:col-span-3">
                        <h4 className="font-label-caps text-label-caps text-surface-bright/50 uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 font-label-md text-label-md text-surface-bright/80">
                            <li><Link href="/#hero" className="hover:text-primary-fixed transition-colors">Home</Link></li>
                            <li><Link href="/#about" className="hover:text-primary-fixed transition-colors">About Us</Link></li>
                            <li><Link href="/#services" className="hover:text-primary-fixed transition-colors">Our Services</Link></li>
                            <li><Link href="/#gallery" className="hover:text-primary-fixed transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column (4 cols) */}
                    <div className="md:col-span-4">
                        <h4 className="font-label-caps text-label-caps text-surface-bright/50 uppercase tracking-widest mb-6">Contact Us</h4>
                        <ul className="space-y-5 font-body-sm text-body-sm text-surface-bright/80">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary-fixed text-lg mt-0.5">location_on</span>
                                <span>Calicut Road, Valanchery<br/>Malappuram, Kerala 676552</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary-fixed text-lg">call</span>
                                <a className="hover:text-primary-fixed transition-colors" href="tel:+919846222216">+91 9846 222 216</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary-fixed text-lg">mail</span>
                                <a className="hover:text-primary-fixed transition-colors" href="mailto:info@malabardecorators.com">info@malabardecorators.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-surface-bright/10 flex flex-col md:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-surface-bright/40">
                    <p>© 2026 Malabar Decorators. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="hover:text-surface-bright/70 transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-surface-bright/70 transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
