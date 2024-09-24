import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound();
  }

  const product = products.items[0];

  const sanitizedDescription = DOMPurify.sanitize(product.description || "");
  return (
    <>
      <div className="mt-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        {/* img  */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages items={product.media?.items} />
        </div>
        {/* text  */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl font-medium capitalize">{product.name}</h1>
          <span
            className="text-gray-500"
            dangerouslySetInnerHTML={{
              __html: sanitizedDescription,
            }}
          ></span>
          <div className="h-[1px] bg-gray-100" />
          {product.price?.price === product.price?.discountedPrice ? (
            <h3 className="font-bold text-2xl">₹ {product.price?.price}</h3>
          ) : (
            <div className="flex items-center gap-4">
              <h2 className="font-bold text-2xl">
                ₹ {product.price?.discountedPrice}
              </h2>
              <h3 className="text-xl font-medium text-gray-500 line-through">
                ₹ {product.price?.price}
              </h3>
            </div>
          )}
          <div className="text-sm text-gray-500">{`( Includes All Taxes )`}</div>
          <div className="h-[1px] bg-gray-100" />
          {/* <CustomizeProducts /> */}
          {product.variants && product.productOptions ? (
            // product customization
            <CustomizeProducts
              productId={product._id!}
              variants={product.variants}
              productOptions={product.productOptions}
            />
          ) : (
            // quantity button
            <Add
              productId={product._id!}
              variantId="00000000-0000-0000-0000-000000000000"
              stockNumber={product.stock?.quantity || 0}
            />
          )}
          <div className="h-[1px] bg-gray-100" />
          {product.additionalInfoSections?.map((section: any) => {
            const sanitizedSectionDescription = DOMPurify.sanitize(
              section.description || ""
            );
            return (
              <div className="text-sm" key={section.title}>
                <h4 className="font-medium mb-4">{section.title}</h4>
                <span
                  dangerouslySetInnerHTML={{
                    __html: sanitizedSectionDescription,
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
