// components/ProductForm.js
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";
export default function ProductForm() {
    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
            <form className="space-y-6">
                {/* ID */}
                <div className="flex flex-col">
                    <label htmlFor="id" className="font-medium text-gray-700">
                        Product ID
                    </label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter Product ID"
                    />
                </div>

                {/* Name */}
                <div className="flex flex-col">
                    <label htmlFor="name" className="font-medium text-gray-700">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter Product Name"
                    />
                </div>

                {/* Description */}
                <div className="flex flex-col">
                    <label htmlFor="description" className="font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter Description"
                        rows="3"
                    ></textarea>
                </div>

                {/* Image */}
                <div className="flex flex-col">
                    <label htmlFor="image" className="font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter Image Path"
                    />
                </div>

                {/* Price */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="originalPrice" className="font-medium text-gray-700">
                            Original Price
                        </label>
                        <input
                            type="number"
                            id="originalPrice"
                            name="originalPrice"
                            className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter Original Price"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="discountedPrice" className="font-medium text-gray-700">
                            Discounted Price
                        </label>
                        <input
                            type="number"
                            id="discountedPrice"
                            name="discountedPrice"
                            className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                            placeholder="Enter Discounted Price"
                        />
                    </div>
                </div>

                {/* Badges */}
                <div className="flex flex-col">
                    <label htmlFor="badges" className="font-medium text-gray-700">
                        Badges (JSON Format)
                    </label>
                    <textarea
                        id="badges"
                        name="badges"
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder='Example: [{"type":"sale","label":"SALE","color":"green"}]'
                        rows="3"
                    ></textarea>
                </div>

                {/* Availability */}
                <div className="flex flex-col">
                    <label htmlFor="availability" className="font-medium text-gray-700">
                        Availability
                    </label>
                    <select
                        id="availability"
                        name="availability"
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        <option value="In Stock">In Stock</option>
                        <option value="Out of Stock">Out of Stock</option>
                    </select>
                </div>

                {/* Actions */}
                <div className="flex flex-col">
                    <label htmlFor="actions" className="font-medium text-gray-700">
                        Actions (JSON Format)
                    </label>
                    <textarea
                        id="actions"
                        name="actions"
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder='Example: [{"label":"Add to Cart","color":"blue","url":"/cart"}]'
                        rows="3"
                    ></textarea>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
            <div className="flex justify-end items-center pt-10 text-red-600">
                <Link href="/dashboard">
                    Go Back <span><GiReturnArrow className="text-red-600 text-2xl" /></span>
                </Link>
            </div>
        </div>
    );
}

