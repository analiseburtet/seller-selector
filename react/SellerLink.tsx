import React, { Fragment } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { Link } from 'vtex.render-runtime'

const SellerLink: StorefrontFunctionComponent<any> = () => {
  const { selectedItem, product } = useProduct()
  const qtdOtherSellers = selectedItem.sellers.length - 1

  if (qtdOtherSellers < 1) return <Fragment></Fragment>

  return (
    <Fragment>
      <Link page="store.sellers" params={{ slug: product.linkText }}>
        {qtdOtherSellers} more offer(s)
      </Link>
    </Fragment>
  )
}

//This is the schema form that will render the editable props on SiteEditor
SellerLink.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {},
}

export default SellerLink
