import Link from "next/link";

export default function Products() {
    return (
        <div>
            <h1>Products</h1>
            <Link href="/products/abc">Product id: abc</Link><br/>
            <Link href="/products/shreeya">Product id: parvatha</Link><br/>
            <Link href="/products/sharvani">Product id: sharvani</Link>
            <br/>
        </div>
    )
}