import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDeals } from "src/redux/selectors";
import { DealsList } from "./Deals.styled";
import DealCard from "./DealCard";
import { getDealsThunk } from "src/redux/deals/dealsThunk";

const DealsGallery = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const deals = useSelector(selectDeals);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        await dispatch(getDealsThunk());
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDeals();
  }, [dispatch]);

  return !loading && !error ? (
    <DealsList>
      {deals.map((deal) => (
        <DealCard key={deal._id} item={deal} />
      ))}
    </DealsList>
  ) : null;
};

export default DealsGallery;
