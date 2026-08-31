export type CoreIconName = 'status' | 'device' | 'signal';

export interface CoreIconProps {
  name: CoreIconName;
  size?: number;
}

export function CoreIcon({ name, size = 16 }: CoreIconProps) {
  return { name, size };
}
