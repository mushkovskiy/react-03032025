import { ReviewList } from "../../../../components/review-list";

export default async function ReviewsPage({ params }) {
  const { id } = await params;
  return <ReviewList id={id} />;
}
