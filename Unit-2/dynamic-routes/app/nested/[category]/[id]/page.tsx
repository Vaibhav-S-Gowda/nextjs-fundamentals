interface ProductPageProps {
    params: Promise<{
        category : string;
        id: string;
    }>
}

export default async function ProductPage({
    params,
}: ProductPageProps){
    const { category, id } = await params;
    return (
        <div>
            <h1>Product Details</h1>
            <p>Category: {category}</p>
            <p>Product ID: {id}</p>
        </div>
    )
}