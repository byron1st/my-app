
export type IconSize = 'xs' | 'sm' | 'md' | 'lg'

export function getIconClasses(size?: IconSize): string {
  switch (size) {
    case 'xs':
      return 'w-3 h-3'
    case 'sm':
      return 'w-4 h-4'
    case 'md':
      return 'w-6 h-6'
    case 'lg':
      return 'w-8 h-8'
      default:
      return 'w-6 h-6'
  }
}