import type { Snippet } from "svelte";

export type Button = {
  children: Snippet;
  onclick: ((e: MouseEvent) => void | (() => void));
  className?: string;
};