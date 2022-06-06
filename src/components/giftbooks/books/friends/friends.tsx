import React, { forwardRef } from "react";
import { HomePage } from "./pages/home-page";
import { TextedPage } from "./pages/texted-page";
import { useStyles } from './styles';
import cn from "classnames";
import { Page1 } from "./pages/page1";
import { Page2 } from "./pages/page2";
import { Page3 } from "./pages/page3";
import { Page4 } from "./pages/page4";
import { Page5 } from "./pages/page5";
import { Page6 } from "./pages/page6";
import { Page7 } from "./pages/page7";
import { Page8 } from "./pages/page8";
import { Page9 } from "./pages/page9";
import { Page10 } from "./pages/page10";
import { Page11 } from "./pages/page11";
import { Page12 } from "./pages/page12";

const asd = {
  page: {
    // width: 500,
    '& svg': {
      width: '100%',
      height: 'auto'
    }
  },
  texted: {
    // padding: '250px 0'
  },
  textedContainer: {
    position: 'relative',
  },
  headerText: {
    color: '#66126B'
  },
  text: {
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 30px'
  }
}
export const Friends = forwardRef((props, ref: React.ForwardedRef<any>) => {
  const styles = useStyles()
  return (
    <div ref={ref}>
      <div className={styles.page} style={{}}>
        <HomePage />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage headerText="Hey!" text="You’re probably wondering what this little book is about…  " />
      </div>
      <div className={styles.page}>
        <Page1 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="Well, it’s about two human beings. They are friends. Friends for life." />
      </div>
      <div className={styles.page}>
        <Page2 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="They trust each other. They know everything about each other, every little secret, as well as every big one." />
      </div>
      <div className={styles.page}>
        <Page3 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="Yes, you’re right! It’s you and me" />
      </div>
      <div className={styles.page}>
        <Page4 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="So, with this little book, I just want to tell you how much I appreciate your friendship.You’re my number one supporter." />
      </div>
      <div className={styles.page}>
        <Page5 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="I’m so happy to have someone that can always give an advice, even if it’s not a good one, haha…" />
      </div>
      <div className={styles.page}>
        <Page6 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="You know, a lot of people just dream about having a friend, a loyal friend, a friend they can open up to…  " />
      </div>
      <div className={styles.page}>
        <Page7 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="That’s why I’m being grateful… I have such friend. Even if we fight or argue, I just know for sure, that you’re still with me" />
      </div>
      <div className={styles.page}>
        <Page8 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="You cheer me up when I’m not in the mood. Sometimes you’re the only one who can do it" />
      </div>
      <div className={styles.page}>
        <Page9 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="Maybe I haven’t told you before, but I really trust you and your opinion is very important for me" />
      </div>
      <div className={styles.page}>
        <Page10 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="I enjoy those hangovers with you, laughing to tears and so on…" />
      </div>
      <div className={styles.page}>
        <Page11 />
      </div>
      <div className={cn(styles.page, styles.texted)}>
        <TextedPage text="You’re not just a friend, you’re my sibling and my soulmate forever…" />
      </div>
      <div className={styles.page}>
        <Page12 />
      </div>
    </div>
  );
});