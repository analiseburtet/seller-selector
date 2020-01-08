import React, { Fragment } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import BuyButton from 'vtex.store-components/BuyButton'

const SellerSelector: StorefrontFunctionComponent<any> = ({ slug }) => {
  console.log('Slug', slug)
  const { product, selectedItem, selectedQuantity } = useProduct()
  console.log(product, selectedItem, selectedQuantity)
  console.log('aqui', product)

  if (!product) return <Fragment>Ooooops</Fragment>
  console.log('frist seller', selectedItem.sellers[0])
  return (
    <Fragment>
      teste?
      {product.productName}
      {selectedItem.sellers.map((selectedSeller: any) => (
        <Fragment>
          <br />
          {selectedSeller.sellerName}
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
        </Fragment>
      ))}
    </Fragment>
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
