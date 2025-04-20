import { SignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const navigate = useNavigate(); // Hook to navigate between routes

  return (
    <div className="h-screen w-full bg-gradient-to-br from-teal-100 via-teal-200 to-teal-100 flex items-center justify-center px-4">
      
      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')} // Navigate to the home page
        className="absolute top-4 left-4 bg-white text-teal-700 font-semibold py-2 px-4 rounded-lg shadow hover:bg-teal-50"
      >
        Back to Home
      </button>

      {/* Container for Logo + SignUp */}
      <div className="flex flex-col items-center w-full max-w-sm">
        {/* Logo and App Name */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://ucarecdn.com/b24d846f-32fa-4621-b123-24188952b1bf/logoremovebgpreview.png"
            alt="Trawell Logo"
            className="h-14 w-14"
          />
          <span className="text-xl font-semibold text-white mt-2 tracking-wide drop-shadow-sm">Trawell</span>
        </div>

        {/* Clerk SignUp Component */}
        <SignUp 
          routing="path" 
          path="/user/sign-up"
          afterSignUpUrl="/selection"
          appearance={{
            elements: {
              rootBox: "px-0 pb-0",
              card: "shadow-none p-0 bg-transparent",
              navbar: "hidden",
              header: "hidden",
              footer: "hidden",
              dividerRow: "hidden",
              socialButtonsBlockButton:
                "py-3 text-base bg-white border border-white/30 backdrop-blur-md text-gray-800 rounded-xl mb-3",
              formButtonPrimary:
                "py-3 text-base bg-white/90 hover:bg-white text-teal-700 font-semibold rounded-xl w-full",
              phoneNumberInput: "block w-full",
              formFieldInput:
                "py-3 px-4 border border-white/40 bg-white/60 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white",
              identityPreviewBoxButton: "py-3 text-base",
            },
          }}
        />
      </div>
    </div>
  );
}