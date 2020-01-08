import React, { Fragment } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import { Link } from 'vtex.render-runtime'
import { FormattedMessage } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'

const SELLER_LINK_CSS_HANDLES = ['sellerLink']

const SellerLink: StorefrontFunctionComponent<any> = () => {
  const { selectedItem, product } = useProduct()
  const qtdOtherSellers = selectedItem.sellers.length - 1
  const handles = useCssHandles(SELLER_LINK_CSS_HANDLES)

  if (qtdOtherSellers < 1) return <Fragment></Fragment>

  return (
    <Link
      page="store.sellers"
      params={{ slug: product.linkText }}
      className={`${handles.simulateShipping} c-on-base fw5 dib-s no-underline pv4 ph2 hover-bg-muted-4 br2 hover-white:hover`}
    >
      <FormattedMessage
        id="store/seller-link"
        values={{ count: qtdOtherSellers }}
      />
    </Link>
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
