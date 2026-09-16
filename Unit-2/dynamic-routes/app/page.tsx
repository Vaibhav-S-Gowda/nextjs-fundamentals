import CSS from "./css_modules/page";
import InlineCSS from "@/app/inline_css/page";
import Student from "@/app/conditional-styling/page";
import Product from "@/app/dynamic-styling/page";
import Tailwind from "@/app/tailwind-css/page";
import StudentCardStyling from "@/app/student-card-styling/page";

export default function Home() {
    return (
        <main className="home-page">
            <section className="hero">
                <p className="hero-badge">CSS & Styling Examples</p>

                <h1>Styling in Next.js</h1>

                <p>
                    A collection of examples demonstrating CSS Modules, Inline CSS,
                    Conditional Styling, Dynamic Styling, and Tailwind CSS.
                </p>
            </section>

            <section className="examples">
                <div className="example-card">
                    <CSS />
                </div>

                <div className="example-card">
                    <InlineCSS />
                </div>

                <div className="example-card">
                    <Student />
                </div>

                <div className="example-card">
                    <Product />
                </div>

                <div className="example-card">
                    <Tailwind />
                </div>

                <div className="example-card">
                    <StudentCardStyling />
                </div>
            </section>
        </main>
    );
}