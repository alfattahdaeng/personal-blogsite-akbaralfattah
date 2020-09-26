import { format } from 'date-fns';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import _ from 'lodash';
import { lighten } from 'polished';
import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../styles/colors';
import { PageContext } from '../templates/post';
import { AuthorList } from './AuthorList';

export interface PostCardProps {
  post: PageContext;
  large?: boolean;
}

export const PostCard: React.FC<PostCardProps> = ({ post, large = false }) => {
  const date = new Date(post.frontmatter.date);
  // 2018-08-20
  const datetime = format(date, 'yyyy-MM-dd');
  // 20 AUG 2018
  const displayDatetime = format(date, 'dd LLL yyyy');

  return (
    <article
      className={`post-card ${post.frontmatter.image ? '' : 'no-image'} ${
        large ? 'post-card-large' : ''
      }`}
      css={[PostCardStyles, large && PostCardLarge]}
    >
      {post.frontmatter.image && (
        <Link className="post-card-image-link" css={PostCardImageLink} to={post.fields.slug}>
          <PostCardImage className="post-card-image">
            {post.frontmatter?.image?.childImageSharp?.fluid && (
              <Img
                alt={`${post.frontmatter.title} cover image`}
                style={{ height: '100%' }}
                fluid={post.frontmatter.image.childImageSharp.fluid}
              />
            )}
          </PostCardImage>
        </Link>
      )}
      <PostCardContent className="post-card-content">
        <Link className="post-card-content-link" css={PostCardContentLink} to={post.fields.slug}>
          <PostCardHeader className="post-card-header">
            {post.frontmatter.tags && (
              <PostCardPrimaryTag className="post-card-primary-tag">
                {post.frontmatter.tags[0]}
              </PostCardPrimaryTag>
            )}
            <PostCardTitle className="post-card-title">{post.frontmatter.title}</PostCardTitle>
          </PostCardHeader>
          <PostCardExcerpt className="post-card-excerpt">
            <p>{post.frontmatter.excerpt || post.excerpt}</p>
          </PostCardExcerpt>
        </Link>
        <PostCardMeta className="post-card-meta">
          <AuthorList authors={post.frontmatter.author} tooltip="small" />
          <PostCardBylineContent className="post-card-byline-content">
            <span>
              {post.frontmatter.author.map((author, index) => {
                return (
                  <React.Fragment key={author.id}>
                    <Link to={`/author/${_.kebabCase(author.id)}/`}>{author.id}</Link>
                    {post.frontmatter.author.length - 1 > index && ', '}
                  </React.Fragment>
                );
              })}
            </span>
            <span className="post-card-byline-date">
              <time dateTime={datetime}>{displayDatetime}</time>{' '}
              <span className="bull">&bull;</span> {post.timeToRead} min read
            </span>
          </PostCardBylineContent>
        </PostCardMeta>
      </PostCardContent>
    </article>
  );
};

const PostCardStyles = css`
  position: relative;
  flex: 1 1 301px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 40px;
  padding: 0 20px 40px;
  min-height: 220px;
  /* border-bottom: 1px solid color(var(--lightgrey) l(+12%)); */
  border-bottom: 1px solid ${lighten('0.12', colors.lightgrey)};
  background-size: cover;
`;

const PostCardLarge = css`
  @media (min-width: 795px) {
    flex: 1 1 100%;
    flex-direction: row;
    padding-bottom: 40px;
    min-height: 280px;
    border-top: 0;

    :not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

const PostCardImageLink = css`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;

const PostCardImage = styled.div`
  width: auto;
  height: 200px;
  background-size: cover;
`;

const PostCardContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const PostCardContentLink = css`
  position: relative;
  display: block;
  /* color: var(--darkgrey); */
  color: ${colors.whitegrey};

  :hover {
    text-decoration: none;
  }
`;

const PostCardPrimaryTag = styled.div`
  margin: 0 0 0.2em;
  /* color: var(--blue); */
  color: ${colors.primaryGreen};
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
`;

const PostCardTitle = styled.h2`
  margin: 0 0 0.4em;
  line-height: 1.15em;
  transition: color 0.2s ease-in-out;
`;

const PostCardExcerpt = styled.section`
  font-family: Georgia, serif;
`;

const PostCardMeta = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 0;
`;

const PostCardBylineContent = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  margin: 4px 0 0 10px;
  color: ${colors.whitegrey};
  font-size: 1.2rem;
  line-height: 1.4em;
  font-weight: 400;
  letter-spacing: 0.2px;
  text-transform: uppercase;

  span {
    margin: 0;
  }

  a {
    color: ${colors.primaryGreen};
    font-weight: 600;
  }
`;

const PostCardHeader = styled.header`
  margin: 15px 0 0;
`;

export const StaticAvatar = css`
  display: block;
  overflow: hidden;
  margin: 0 0 0 -6px;
  width: 34px;
  height: 34px;
  border: #fff 2px solid;
  border-radius: 100%;
`;

export const AuthorProfileImage = css`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
`;