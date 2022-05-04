import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbacckTypes = {
  BUG: {
    title: "Problema",
    image: {
      src: bugImageUrl,
      alt: "Imagem de um inseto",
    }
  },
  IDEA: {
    title: "Sugestão",
    image: {
      src: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      src: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    }
  },
}

export type FeedbackType = keyof typeof feedbacckTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-800 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
        feedbackType={feedbackType} 
        onFeedbackRestartRequest ={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-1" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>

  );
}