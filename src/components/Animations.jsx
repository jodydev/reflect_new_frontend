import React from "react";
import { lazy, Suspense } from "react";

const SubTitle = lazy(() => import("../animations/SubTitleAnimations"));
const ParallaxImage = lazy(() => import("../animations/ParallaxImage"));
const FadeAnimations = lazy(() => import("../animations/FadeAnimations"));
const AppearDown = lazy(() => import("../animations/AppearDown"));
const VanillaTiltHover = lazy(() => import("../animations/VanillaTiltHover"));
const ScrollToElement = lazy(() => import("../animations/ScrollToElement"));

const Animations = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubTitle />
      <ParallaxImage />
      <FadeAnimations />
      <AppearDown />
      <VanillaTiltHover />
      <ScrollToElement />
    </Suspense>
  );
};

export default Animations;
