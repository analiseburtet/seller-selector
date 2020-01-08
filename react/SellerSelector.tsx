import React, { Fragment } from 'react'
import useProduct from 'vtex.product-context/useProduct'

const SellerSelector: StorefrontFunctionComponent<any> = ({ slug }) => {
  console.log('Slug', slug)
  const { product, selectedItem, selectedQuantity } = useProduct()
  console.log(product, selectedItem, selectedQuantity)

  if (!product) return <Fragment>Ooooops</Fragment>

  return (
    <Fragment>
      teste?
      {product.productName}
      {/* <img src="https://d1io3yog0oux5.cloudfront.net/streetcontent2/files/pages/under-construction/under-construction.png"></img> */}
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
