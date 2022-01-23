import { signIn } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import LoadingDots from "@/components/app/loading-dots";

const pageTitle = "Login";
const logo = "/favicon.ico";
const description =
  "Platforms Starter Kit is a comprehensive template for building multi-tenant applications with custom domains.";

export default function Login() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href={logo} />
        <link rel="shortcut icon" type="image/x-icon" href={logo} />
        <link rel="apple-touch-icon" sizes="180x180" href={logo} />
        <meta name="theme-color" content="#7b46f6" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta itemProp="name" content={pageTitle} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={logo} />
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logo} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Elegance" />
        <meta name="twitter:creator" content="@StevenTey" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={logo} />
      </Head>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/logo.png"
          alt="Platforms Starter Kit"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Platforms Starter Kit
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Build multi-tenant applications with custom domains. <br /> Read the{" "}
          <a
            href="https://demo.vercel.pub/platforms-starter-kit"
            target="_blank"
            className="font-medium text-black hover:text-gray-800"
          >
            blog post
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <button
            disabled={loading}
            onClick={() => {
              setLoading(true);
              signIn("google");
            }}
            className={`${
              loading ? "cursor-not-allowed bg-[#1da0f285]" : "bg-[#1da1f2]"
            } group flex justify-center items-center space-x-5 w-full sm:px-4 h-16 rounded-md focus:outline-none`}
          >
            {loading ? (
              <LoadingDots color="#fff" />
            ) : (
              <p
                className="w-6 h-6 group-hover:animate-wiggle"
              >
                Google
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
