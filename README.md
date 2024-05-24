## Google Login with Firebase Authentication in React

This guide explains how to implement Google Login with Firebase Authentication in a React application.

### Prerequisites

-  A Google account
-  A Firebase project
-  A React application already created

### Steps

1. **Install Firebase Authentication:**

   ```bash
   npm install firebase/auth
   ```

2. **Configure Firebase:**

   -  Create a new Firebase project or open an existing one.
   -  Open the Firebase console and enable authentication.
   -  Follow the Firebase guide to add a new web app.
   -  Download the generated `firebaseConfig.js` file.
   -  Move the `firebaseConfig.js` file to the root directory of your React project.

3. **Implement Google Login:**

   -  **Import Firebase Authentication:**

      ```javascript
      import { initializeApp } from "firebase/app";
      import { getAuth, GoogleAuthProvider } from "firebase/auth";

      // Import Firebase configuration
      import firebaseConfig from "./firebaseConfig";

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      // Get the authentication instance
      const auth = getAuth(app);

      // Create a Google provider
      const googleProvider = new GoogleAuthProvider();
      ```

   -  **Create a Google Login Button:**

      ```javascript
      <button type="button" className="btn btn-google" onClick={handleGoogleLogin}>
         Login with Google
      </button>
      ```

   -  **Implement the `handleGoogleLogin` Function:**

      ```javascript
      const handleGoogleLogin = async () => {
         try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            console.log("User:", user);

            // Perform actions after successful login, such as storing user information or redirecting to another page
         } catch (error) {
            console.error("Error during login:", error);
            alert(error.message);
         }
      };
      ```

4. **Logout (Optional):**

   -  Follow the steps above to add a logout button and a `handleLogout` function that uses `signOut(auth)` to sign out the user.

### Notes

-  Make sure you have replaced `<YOUR_PROJECT_ID>` with your Firebase project ID in `firebaseConfig.js`.
-  You can customize the styling of the Google login button and messages as needed.
-  Make sure you handle any errors that may occur during the login and logout process.

### Contributions

This guide is created to help developers who want to implement Google Login with Firebase Authentication in their React applications.

You are free to contribute by adding information, fixing errors, or suggesting changes.

**Happy coding!**
