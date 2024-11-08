import { FormContainer } from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/SubmitButton";
import { EmptyList } from "@/components/home/EmptyList";
import { Title } from "@/components/properties/Title";
import { ReviewCard } from "@/components/reviews/ReviewCard";
import {
  deleteReviewAction,
  fetchPropertyReviewsByUser,
} from "@/utils/actions";

interface DeleteReviewProps {
  reviewId: string;
}

async function ReviewsPage() {
  const reviews = await fetchPropertyReviewsByUser();
  if (reviews.length === 0) {
    return <EmptyList />;
  }
  return (
    <>
      <Title text="Your Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map(({ comment, rating, id, property: { image, name } }) => {
          return (
            <ReviewCard key={id} reviewInfo={{ comment, rating, image, name }}>
              <DeleteReview reviewId={id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}
export default ReviewsPage;

const DeleteReview = ({ reviewId }: DeleteReviewProps) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer title="Delete Review" action={deleteReview}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
};
