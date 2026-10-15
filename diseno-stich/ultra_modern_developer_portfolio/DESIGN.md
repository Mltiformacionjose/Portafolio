---
name: Ultra-Modern Developer Portfolio
colors:
  surface: '#0e1416'
  surface-dim: '#0e1416'
  surface-bright: '#343a3c'
  surface-container-lowest: '#090f11'
  surface-container-low: '#171d1e'
  surface-container: '#1b2122'
  surface-container-high: '#252b2d'
  surface-container-highest: '#303638'
  on-surface: '#dee3e6'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#dee3e6'
  inverse-on-surface: '#2b3133'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffb873'
  on-tertiary: '#4b2800'
  tertiary-container: '#e89337'
  on-tertiary-container: '#5b3200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdcbf'
  tertiary-fixed-dim: '#ffb873'
  on-tertiary-fixed: '#2d1600'
  on-tertiary-fixed-variant: '#6a3b00'
  background: '#0e1416'
  on-background: '#dee3e6'
  surface-variant: '#303638'
typography:
  display-xl:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  code:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is engineered for a high-end frontend developer portfolio, blending **Corporate Modernism** with **Glassmorphism**. The brand personality is professional, technically proficient, and forward-thinking. It targets tech recruiters and potential clients who value precision, clean code, and aesthetic sophistication.

The interface utilizes a deep, immersive dark mode to reduce eye strain and allow vibrant accent colors to pop. Visual interest is maintained through subtle depth, utilizing frosted glass textures and soft glow effects that suggest a high-performance digital environment. The emotional response should be one of trust, innovation, and technical mastery.

## Colors

The palette is centered on a "Deep Space" foundation. 
- **Primary (#06b6d4):** A vibrant Cyan used for critical actions, active states, and code highlighting.
- **Secondary (#3b82f6):** A technical Blue used for subtle gradients and secondary interactive elements.
- **Backgrounds:** The foundation uses Slate-950 (#0f172a) for the base and Slate-800 (#1e293b) for elevated surfaces.
- **Accents:** Use semi-transparent versions of the primary color (10-20% opacity) for background glows and glass borders to maintain high contrast while adding depth.

## Typography

The system uses a hierarchical font strategy to balance impact with readability.
- **Headings:** Montserrat provides a bold, geometric presence that commands attention. High-weight (700+) should be used for section titles in Spanish (e.g., "Proyectos", "Sobre mí").
- **Body:** Inter is used for all long-form content to ensure maximum legibility against dark backgrounds.
- **Labels & Code:** Geist (or a similar technical sans) is used for tags, button labels, and code snippets to reinforce the developer-centric identity.
- **Language Note:** Ensure all typographic scales account for Spanish text length, which typically runs 20-25% longer than English.

## Layout & Spacing

The layout follows a **Fluid Grid** system based on a 12-column structure for desktop and a 4-column structure for mobile. 

- **Alignment:** Use generous vertical whitespace (stack-lg) between major sections to allow the glassmorphic elements "room to breathe."
- **Constraints:** Content should be centered within a max-width container of 1280px.
- **Rhythm:** Spacing is strictly based on a 4px scale. Components should primarily use 16px (4 units) or 24px (6 units) for internal padding.
- **Responsive:** On mobile, margins reduce to 20px, and horizontal padding in cards should be tightened to maximize content area.

## Elevation & Depth

Depth is communicated through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

1.  **Level 0 (Base):** Slate-950 background.
2.  **Level 1 (Cards/Sections):** Slate-800 with a 0.5px border of white at 10% opacity. 
3.  **Level 2 (Modals/Overlays):** Background blur (backdrop-filter: blur(12px)) combined with a semi-transparent surface (Slate-800 at 70% alpha).
4.  **Interactive Glow:** Primary color buttons should have a soft, outer glow (box-shadow: 0 0 20px rgba(6, 182, 212, 0.3)) to indicate "active" or "hover" states.

## Shapes

The design system utilizes an organic yet structured shape language.
- **Base Components:** Standard buttons and inputs use `rounded-lg` (0.5rem / 8px).
- **Container Elements:** Project cards, profile sections, and modals use `rounded-2xl` (1.5rem / 24px) to create a soft, friendly, and modern appearance that contrasts with the technical typography.
- **Pill Elements:** Status indicators (e.g., "Disponible para trabajar") and technology tags use a full pill radius for distinct visual categorization.

## Components

- **Buttons:** 
  - *Primary:* Solid Cyan gradient to Blue, white text, 2xl roundedness. Text in Spanish: "Contactar", "Ver Proyecto".
  - *Secondary:* Ghost style with a 1px Cyan border and backdrop blur.
- **Project Cards:** Large 24px rounded corners. Use a subtle hover lift effect (translate-y: -4px). Include a "glass" header for the project title.
- **Chips/Tags:** Small, Geist-font labels with a low-opacity Cyan background (rgba(6, 182, 212, 0.1)) to categorize technologies (React, TypeScript, etc.).
- **Input Fields:** Darker Slate backgrounds than the surface they sit on. Focus state should trigger a 1px Primary color border. Use Spanish placeholders (e.g., "Tu nombre aquí").
- **Navbar:** Sticky position with `backdrop-filter: blur(20px)` and a bottom border of 1px Slate-700. Minimalist icons paired with Geist labels.
- **Lists:** Clean lines with Slate-800 dividers. Hover states should highlight the entire row with a subtle background shift.