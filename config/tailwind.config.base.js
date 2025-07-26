// ZigMe Design System - Base Tailwind Configuration
// Import and extend this in each ZigMe app

export const zigmeBaseConfig = {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // System Colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // ZigMe Design System Colors
        'brand-primary': 'hsl(var(--brand-primary))',
        'brand-secondary': 'hsl(var(--brand-secondary))',
        'surface-light': 'hsl(var(--surface-light))',
        'surface-card': 'hsl(var(--surface-card))',
        'surface-dark': 'hsl(var(--surface-dark))',
        'text-body': 'hsl(var(--text-body))',
        'text-muted': 'hsl(var(--text-muted))',
        'border-subtle': 'hsl(var(--border-subtle))',
        'icon-accent': 'hsl(var(--icon-accent))'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      borderRadius: {
        'xs': '4px',
        'sm': '8px',
        'lg': '24px',
        'xl': '56px',
        'pill': '9999px',
        DEFAULT: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)'
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.04)',
        'popover': '0 8px 24px rgba(0, 0, 0, 0.08)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: []  // Apps can add their own plugins
};