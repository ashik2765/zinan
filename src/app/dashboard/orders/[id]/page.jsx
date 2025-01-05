import { useRouter } from "next/router";

const OrderDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1 className="text-2xl font-bold">Order Details</h1>
            <p>Order ID: {id}</p>
            {/* Fetch and display more order details here */}
        </div>
    );
};

export default OrderDetails;
