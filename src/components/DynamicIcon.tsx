import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = (LucideIcons as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle {...props} />;
  }
  return <IconComponent {...props} />;
}
