"use client"
import { useState } from "react";
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";
const imageHostingKey = "50f7fe249836d6c3032146e0eb74aaa8"; // Replace with your API key
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

export default function ProductForm() {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: "",
        image: "",
        originalPrice: "",
        discountedPrice: "",
        badges: "",
        availability: "In Stock",
        actions: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Upload image to ImageBB
            const formDataForImage = new FormData();
            formDataForImage.append("image", formData.image);

            const imageResponse = await fetch(imageHostingApi, {
                method: "POST",
                body: formDataForImage,
            });

            const imageResult = await imageResponse.json();
            if (!imageResponse.ok) {
                throw new Error("Image upload failed");
            }

            // Use the uploaded image URL
            const uploadedImageUrl = imageResult.data.url;
            // Parse JSON fields for badges and actions
            const badges = JSON.parse(formData.badges || "[]");
            const actions = JSON.parse(formData.actions || "[]");

            // Construct the final JSON object
            const productData = {
                id: Number(formData.id),
                name: formData.name,
                description: formData.description,
                image: uploadedImageUrl,
                price: {
                    original: Number(formData.originalPrice),
                    discounted: Number(formData.discountedPrice),
                },
                badges,
                availability: formData.availability,
                actions,
            };

            // Send the JSON to your API
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/uploadAdata`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            });

            const result = await response.json();
            if (response.ok) {
                alert("Product added successfully!");
                console.log("Response:", result);
            } else {
                alert("Failed to add product.");
                console.error("Error:", result);
            }
        } catch (error) {
            alert("Error parsing JSON fields. Please check your input.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Add Product</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* ID */}
                <div className="flex flex-col">
                    <label htmlFor="id" className="font-medium text-gray-700">
                        Product ID
                    </label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.description}
                        onChange={handleChange}
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter Description"
                        rows="3"
                    ></textarea>
                </div>

                {/* Image */}
                <div className="flex flex-col">
                    <label htmlFor="image" className="font-medium text-gray-700">
                        Image file
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                        className="border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-200"
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
                            value={formData.originalPrice}
                            onChange={handleChange}
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
                            value={formData.discountedPrice}
                            onChange={handleChange}
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
                        value={formData.badges}
                        onChange={handleChange}
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
                        value={formData.availability}
                        onChange={handleChange}
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
                        value={formData.actions}
                        onChange={handleChange}
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