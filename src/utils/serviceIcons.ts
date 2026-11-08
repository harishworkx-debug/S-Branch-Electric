import {
  Zap,
  Cable,
  Home,
  Building2,
  LayoutGrid,
  ArrowUpCircle,
  ShieldCheck,
  Lightbulb,
  PlugZap,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const serviceIconMap: Record<string, LucideIcon> = {
  Zap,
  Cable,
  Home,
  Building2,
  LayoutGrid,
  ArrowUpCircle,
  ShieldCheck,
  Lightbulb,
  PlugZap,
  Wrench,
};

export function getServiceIcon(name: string): LucideIcon {
  return serviceIconMap[name] ?? Zap;
}

