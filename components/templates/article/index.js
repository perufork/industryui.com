/**
 * Article
 * Template to showcase a Blog article.
 *
 * Article and category data is passed in
 */

// React
import { array, string } from 'prop-types'

// UI
import { ArticleDetails, Breadcrumb, Category, Heading, Image } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Article = ({ article, category, frontmatter }) => {
  const frontMatter = (matter) => {
    if (matter === 'tags') {
      return frontmatter[matter].map((item) => (
        { content: item.replace(/[[\]]/g, '').trim(), to: 'javascript:;' }
      ))
    }

    return frontmatter[matter]
  }

  return (
    <StyledArticle
      itemProp='blogPost'
      itemScope
      itemType='http://schema.org/BlogPosting'
      role='article'
    >

      <header>

        {frontmatter.image &&
          <StyledImage
            alt={frontmatter.heading}
            slant
            src={`/static/blog/${frontmatter.slug}/hero.jpg`}
          />
        }

        <Breadcrumb
          category={category}
          page={frontmatter.heading}
          path='javasript:;'
        />

        <Category category={category} path='javasript:;' />

        <Heading content={frontmatter.heading} />

        <ArticleDetails
          author={frontmatter.author}
          tags={frontMatter('tags')}
        />

      </header>

      {article}

      {/*
        <footer>
          <% if locals[:pager] %>
            <% prevPage = article.article_previous || false %>
            <% nextPage = article.article_next || false %>
            <%= partial 'partials/molecule/pager.erb', locals: {
              prevPage: prevPage,
              nextPage: nextPage
            } %>
          <% end %>
        </footer>
      */}

    </StyledArticle>
  )
}

Article.propTypes = {
  article: array.isRequired,
  category: string
}

const StyledArticle = styled.article`
  max-width: 750px;
  margin: 0 auto;
  position: relative;

  .article--instagram {
    display: grid;
    justify-items: center;
  }
`

const StyledImage = styled(Image)`
  position: relative;
`

// li:before {
//   color: #000 !important;
// }

// li.active,
// a {
//   color: red;
// }

// a:hover {
//   color: red;
// }

// .image__img {
//   width: 100%;
// }

// h1 {
// line-height: 44px;
// margin: 20px 0;
// }

// h2 {
// line-height: 27px;
// margin: 20px 0;
// }

// h3 {
// line-height: 22px;
// margin: 20px 0;
// }

// .img-responsive {
// margin-bottom: 15px;
// }

// a {
// color: $brand-primary;

// &:hover {
// color: #bdbaba;
// }
// }

// p {
// margin-bottom: 20px;
// }

// ul {
// list-style: none;
// margin-bottom: 20px;
// padding-left: 25px;

// li {
// &::before {
// color: $brand-primary;
// content: '\002022';
// display: inline-block;
// width: 14px;
// }
// }
// }

// .table {
// tr {
// td {
// border-top: 0;
// padding: 0;
// }
// }

// p {
// margin: 0;
// }
// }
// }

// &--instagram {
// display: grid;
// justify-items: center;
// }

// // Media queries - Mobile Landscape
// @media only screen and (orientation: portrait) and (min-width: 320px) and (max-width: 767px) {
// // Image
// //------------------------------------------------------------------------//
// &__image {
// margin: 0 -15px;

// // Background slant
// &:after {
// height: 40px;
// }
// }
// }

// // Media queries - Mobile
// @media only screen and (min-width: 320px) and (max-width: 767px) {
// margin-bottom: 30px;
// margin-top: 171px;
// position: initial;

// &__image {
// margin: 0 -15px;
// }

// &.newsroom {
// margin-top: 0;
// }

// .embed-responsive {
// margin-left: -15px;
// margin-right: -15px;
// }

// &__breadcrumb {
// margin-left: -15px;
// margin-right: -15px;
// }
// }