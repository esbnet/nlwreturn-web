import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbacckTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequest: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequest }: FeedbackTypeStepProps) {
  const feedTypeInfo = feedbacckTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequest}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedTypeInfo.image.src} alt={feedTypeInfo.image.alt} className="w-6 h-6" />
          {feedTypeInfo.title}
        </span>
        <CloseButton />

      </header>

      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte-nos com detalhe o que está acontecendo"
        />
      </form>

      <footer className="flex gap-2 m-2 w-full">
        <button type="button" className="p-2 bg-zinc-700 rounded border-transparent hover:bg-zinc-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
          <Camera className="w-6 h-6" />
        </button>
        <button
          type="submit"
          // disabled={comment.length === 0}
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >          Enviar feedback
        </button>
      </footer>

    </>
  )
}