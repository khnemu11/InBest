import { useState } from "react";
import { deleteCocomment, deleteComment, likeComment, putComment } from "../../../api/board";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
import { Comment } from "../../../type/Board";

export const useBoardComment = (comment: Comment) => {
  const [showCocommentCreate, setShowCocommentCreate] = useState(false);
  const [showCocoment, setShowCocoment] = useState(false);
  const queryClient = useQueryClient();
  const [showCommentUpdate, setShowCommentUpdate] = useState(false);
  const [commentUpdateText, setCommentUpdateText] = useState(comment.context);
  const onDeleteComment = async (boardSeq: string, commentSeq: string, cocomentSeq: string | null) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      if (!cocomentSeq) {
        try {
          await deleteComment(boardSeq, commentSeq);
          queryClient.invalidateQueries("getBoardDetail");
          toast.success("삭제되었습니다");
        } catch (err) {
          toast.error("삭제에 실패했습니다");
          console.log(err);
        }
      } else if (cocomentSeq) {
        try {
          await deleteCocomment(boardSeq, commentSeq, cocomentSeq);
          queryClient.invalidateQueries("getBoardDetail");
          toast.success("삭제되었습니다");
        } catch (err) {
          toast.error("삭제에 실패했습니다");
          console.log(err);
        }
      }
    }
  };

  const onUpdateComment = async (boardSeq: string, commentSeq: string, context: string) => {
    try {
      await putComment(boardSeq, commentSeq, context);
      toast.success("수정되었습니다.");
      queryClient.invalidateQueries("getBoardDetail");
      setCommentUpdateText("");
      setShowCommentUpdate(false);
    } catch (err) {
      toast.error("수정에 실패했습니다.");
      console.log(err);
    }
  };

  const onLikeComment = async (boardSeq: string, commentSeq: string) => {
    try {
      await likeComment(boardSeq, commentSeq);
      queryClient.invalidateQueries("getBoardDetail");
    } catch (err) {
      console.log(err);
    }
  };
  return {
    showCommentUpdate,
    setShowCommentUpdate,
    showCocommentCreate,
    setShowCocommentCreate,
    showCocoment,
    setShowCocoment,
    onDeleteComment,
    commentUpdateText,
    setCommentUpdateText,
    onUpdateComment,
    onLikeComment,
  };
};