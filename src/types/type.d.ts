import type { SpringOptions } from "motion";

// * Type definition for CustomButton Compoent.
/*
 TODO: 1. include prop for animation
*/
export type CustomButtonProps = {
  name?: string;
  btnLink?: string;
  bgVarient?: "primary" | "secondary";
  icon?: React.ReactNode;
};

// * Testimonial Type Definition for Slider Component.
type Testimonial = {
  name: string;
  company: string;
  message: string;
  profile: string;
};

export type TestimonialProps = {
  testimonials: Testimonial[];
};

// * Testimonal Card Prop Type Definitions.
export type TestimonialCardProps = {
  message: string;
  name: string;
  company: string;
  profile: string;
  className: string;
  isActive?: boolean;
};

// * Types Definition for Dock Component.
export type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

export type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

export type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  link: string;
  mouseX: MotionValue;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
};

// ? This is the main type definition for dock component.
type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  link: string;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};
