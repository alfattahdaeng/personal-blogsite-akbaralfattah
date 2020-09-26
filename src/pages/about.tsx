import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: ${colors.primaryBlack};
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About - 1997</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>
                gokigen na chou ni natte kirameku kaze ni notte<br></br>
                ima sugu kimi ni ai ni yukou<br></br>
                yokei na koto nante wasureta hou ga mashi sa<br></br>
                kore ijou shareteru jikan wa nai
                </p>
                
                <p>
                nani ga wow wow wow wow wow kono sora ni todoku no darou<br></br>
                dakedo wow wow wow wow wow ash-ta no yotei mo wakaranai
                </p>
                
                <p>
                mugendai na yume no ato no nanimo nai yo no naka ja<br></br>
                sou sa itoshii omoi mo makesou ni naru kedo<br></br>
                stay shigachi na imeeji darake no tayorinai tsubasa demo<br></br>
                kitto toberu sa on my love
                </p>
                
                <p>
                ukareta chou ni natte ichizu na kaze ni notte<br></br>
                doko mademo kimi ni ai ni yukou<br></br>
                aimai na kotoba tte igai ni benri datte<br></br>
                sakenderu hitto songu kikinagara
                </p>
                
                <p>
                nani ga wow wow wow wow wow kono machi ni hibiku no darou<br></br>
                dakedo wow wow wow wow wow kitai sh-tetemo shikata nai
                </p>
                
                <p>
                mugendai na yume no ato no yarusenai yo no naka ja<br></br>
                sou sa joushiki hazure mo waruku wa nai ka na<br></br>
                stay shisou na imeeji wo someta gikochinai tsubasa demo<br></br>
                kitto toberu sa on my love
                </p>

                <p>
                mugendai no yume no ato no nanimo nai yo no naka ja<br></br>
                sou sa itoshii omoi mo makesou ni naru kedo<br></br>
                stay shigachi na imeeji darake no tayorinai tsubasa demo<br></br>
                kitto toberu sa oh yeah
                </p>

                <p>
                mugendai na yume no ato no yarusenai yo no naka ja<br></br>
                sou sa joushiki hazure mo waruku wa nai ka na<br></br>
                stay shisou na imeeji wo someta gikochinai tsubasa demo<br></br>
                kitto toberu sa on my love
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
