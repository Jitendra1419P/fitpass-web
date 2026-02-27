import { Button } from "@/components/ui/button";
import {
  Dumbbell,
  Heart,
  Bike,
  Flame,
  Zap,
  MapPin,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "Yoga", icon: Heart, classes: "2,400+", color: "text-rose-500" },
  { name: "HIIT", icon: Flame, classes: "1,800+", color: "text-orange-500" },
  { name: "Cycling", icon: Bike, classes: "950+", color: "text-amber-500" },
  {
    name: "Strength",
    icon: Dumbbell,
    classes: "3,200+",
    color: "text-red-500",
  },
  {
    name: "Pilates",
    icon: Sparkles,
    classes: "1,100+",
    color: "text-pink-500",
  },
  { name: "Boxing", icon: Zap, classes: "720+", color: "text-orange-600" },
];

const stats = [
  { value: "10,000+", label: "Classes Available" },
  { value: "500+", label: "Partner Studios" },
  { value: "50,000+", label: "Active Members" },
  { value: "25+", label: "Cities" },
];

const steps = [
  {
    number: "01",
    title: "Choose Your Plan",
    description:
      "Select a membership that fits your lifestyle. Start with a free trial.",
  },
  {
    number: "02",
    title: "Book Any Class",
    description:
      "Browse thousands of classes and book instantly at studios near you.",
  },
  {
    number: "03",
    title: "Show Up & Sweat",
    description:
      "Check in, work out, and track your progress. It's that simple.",
  },
];


export default function Home() {
  return (
    <div className="">
     <h1>Home World</h1>
     <Button>
      Click Me
     </Button>
    </div>
  );
}
