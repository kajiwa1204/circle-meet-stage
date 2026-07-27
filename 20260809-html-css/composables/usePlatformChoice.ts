import { ref, type Ref } from "vue";

export type PlatformChoice = "mac" | "win";

const STORAGE_KEY = "deck-platform";

// デッキ全体で1つの状態を共有する（どのスライドで切り替えても連動させるため）
let choice: Ref<PlatformChoice> | undefined;

function readSaved(): PlatformChoice {
  if (typeof localStorage === "undefined") return "mac";
  return localStorage.getItem(STORAGE_KEY) === "win" ? "win" : "mac";
}

export function usePlatformChoice() {
  choice ??= ref<PlatformChoice>(readSaved());

  function setPlatform(next: PlatformChoice) {
    choice!.value = next;
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next);
    }
  }

  return { platform: choice, setPlatform };
}
