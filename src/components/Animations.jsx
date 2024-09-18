import React from "react";
import { lazy, Suspense } from "react";

const SmoothScroll = lazy(() => import("../animations/SmoothScroll"));
const SubTitle = lazy(() => import("../animations/SubTitleAnimations"));
const RevealImage = lazy(() => import("../animations/RevealImages"));
const ParallaxImage = lazy(() => import("../animations/ParallaxImage"));
const FadeAnimations = lazy(() => import("../animations/FadeAnimations"));
const AppearDown = lazy(() => import("../animations/AppearDown"));
const SplitTextAnimations = lazy(() => import("../animations/SplitTextAnimations"));
const VanillaTiltHover = lazy(() => import("../animations/VanillaTiltHover"));
const ScrollToElement = lazy(() => import("../animations/ScrollToElement"));

const Animations = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SmoothScroll />
      <SubTitle />
      <RevealImage />
      <ParallaxImage />
      <FadeAnimations />
      <AppearDown />
      <SplitTextAnimations />
      <VanillaTiltHover />
      <ScrollToElement />
    </Suspense>
  );
};

export default Animations;
