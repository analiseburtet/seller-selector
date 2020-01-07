import React, { Fragment } from 'react'
import useProduct from 'vtex.product-context/useProduct'

const SellerSelector: StorefrontFunctionComponent<any> = () => {
  const { selectedItem } = useProduct()
  const qtdOtherSellers = selectedItem.sellers.length - 1
  if (qtdOtherSellers < 1) return <Fragment></Fragment>

  return (
    <Fragment>
      <a href="#">{qtdOtherSellers} more offer(s)</a>
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
