import React from 'react'

export default function Review() {
    const reviews = [
        {
            name: "John Doe",
            rating: 5,
            review: "Fantastic product! High quality and fast delivery. Will buy again!",
        },
        {
            name: "Jane Smith",
            rating: 4,
            review: "Great service and good quality. Slightly delayed delivery, but overall happy.",
        },
        {
            name: "Alex Johnson",
            rating: 5,
            review: "Exceeded my expectations. Highly recommend to others!",
        },
    ];
    return (
        <section id="reviews" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Customer Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                <div className="text-yellow-400 text-lg">
                                    {Array.from({ length: review.rating }, (_, i) => (
                                        <span key={i}>★</span>
                                    ))}
                                    {Array.from({ length: 5 - review.rating }, (_, i) => (
                                        <span key={i} className="text-gray-300">
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <span className="ml-3 text-sm font-medium text-gray-600">
                                    {review.name}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
