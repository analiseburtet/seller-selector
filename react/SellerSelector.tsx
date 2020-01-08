import React, { Fragment } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import BuyButton from 'vtex.store-components/BuyButton'

const SellerSelector: StorefrontFunctionComponent<any> = ({ slug }) => {
  console.log('Slug', slug)
  const { product, selectedItem, selectedQuantity } = useProduct()

  if (!product) return <Fragment>Ooooops</Fragment>
  console.log('frist seller', selectedItem.sellers[0])
  return (
    <div className="mr-auto ml-auto mw9 flex items-center">
      <div className="justify-center">
        <img src={selectedItem.images[0].imageUrl}></img>
        <p style={{ textAlign: 'center' }}> {product.productName}</p>
      </div>
      <div>
        {selectedItem.sellers.map((selectedSeller: any) => (
          <div>
            <br />
            Selled by: {selectedSeller.sellerName}
            <BuyButton
              skuItems={BuyButton.mapCatalogItemToCart({
                product,
                selectedItem,
                selectedSeller,
                selectedQuantity,
              })}
              available={
                selectedSeller &&
                selectedSeller.commertialOffer &&
                selectedSeller.commertialOffer.AvailableQuantity > 0
              }
              isOneClickBuy
              shouldAddToCart
            ></BuyButton>
          </div>
        ))}
      </div>
    </div>
  )
}

//This is the schema form that will render the editable props on SiteEditor
SellerSelector.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default SellerSelector
