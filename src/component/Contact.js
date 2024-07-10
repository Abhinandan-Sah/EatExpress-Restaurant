const Contact = (() => {
    return (
        <div class="min-h-screen flex items-center justify-center">
    <div class="bg-gray-100 shadow-xl rounded-lg p-8 w-[20rem]">
        <h1 class="font-bold text-3xl mb-4 text-center">Welcome to Contact Us Page</h1>
        <form>
            <div class="mb-4">
                <input name="name" type="text" class="border border-gray-300 p-2 rounded-lg w-full" placeholder="Name" />
            </div>
            <div class="mb-4">
                <textarea name="message" class="border border-gray-300 p-2 rounded-lg w-full" placeholder="Message" rows="4"></textarea>
            </div>
            <div class="text-center">
                <button type="submit" class="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg border border-green-500 hover:bg-green-600 hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Submit</button>
            </div>
        </form>
    </div>
</div>

    );
});

export default Contact;