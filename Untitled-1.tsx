/*import { updateSession } from "@/utils/supabase/middleware";

// [x] useEffect
useEffect(() => {
  setLoading(true);
  getSession();

  setLoading(false);
});

// [x] getSession
const getSession = async () => {
  let session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    handleAnonymousSignIn();
  }

  if (session.user.email) {
    setUserEmail(session.user.email);
  }
};

// [ ] handleSubmit
const handleSubmit = async () => {
  setLoading(true);
  authenticateEmail();
  //don't need to set input field to blank because on click it should render a loading component or the start button
  setUserEmail(values.email);
  //update session user email with the email from the form
  getSession(); // this *should* reload the session with the new email
};

// [ ] authenticateEmail
const authenticateEmail = async (values: z.infer<typeof formSchema>) => {
  setLoading(true); // this may be redundant inside functions that already did this
  setErrorMessage("");
  const { data: existingEmail, error: existingEmailErr } = await supabase
    .from("profiles")
    .select("username")
    .eq("username", values.email.split("@")[0])
    .single();

  if (
    existingEmailErr &&
    existingEmailErr.message !==
      "JSON object requested, multiple (or no) rows returned"
  ) {
    setErrorMessage("An error occurred, please try again.");
    setLoading(false);
    return;
  } else {
    console.log("unique user entered!");
  }

  if (existingEmail) {
    setErrorMessage("Email is already taken.");
    setLoading(false);
    return;
  }
};


// [ ] handleAnonymousSignIn (check this after clearing data)
const handleAnonymousSignIn = async () => {
  const { data: anonUser, error: anonSignInError } =
    await supabase.auth.signInAnonymously();
  if (anonSignInError) {
    console.error("Error signing in anonymously: ", anonSignInError);
  } else {
    console.log("Signed in as anonymous user: ", anonUser);
  }
};



*/
// -----------------
/*
  //// Anonymous sign in function -- give us a session if one doesn't already exist
  const handleAnonymousSignIn = async () => {
    let session = (await supabase.auth.getSession()).data.session;
    console.log("1st session check:", session);

    if (session?.user.email) {
      // if there is a session and the user has an email, set the email and profile
      setUserEmail(session?.user.email);
      console.log("user email:", session?.user.email);

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("username")
        .eq("username", session?.user.email.split("@")[0])
        .single();
      if (profileError) {
        console.error("Error fetching profile: ", profileError);
      } else {
        console.log("Profile: ", profile);
      }
    }

    if (!session) {
      console.log("no session, lets sign in anonymously");
      const { data: anonUser, error: anonError } =
        await supabase.auth.signInAnonymously();
      if (anonError) {
        console.error("Error signing in anonymously: ", anonError);
      } else {
        console.log("Signed in as anonymous user", anonUser);
        session = (await supabase.auth.getSession()).data.session;
      }
    }
    console.log("Current session:", session);
    console.log("User's email: ", session?.user.email);
  };

  useEffect(() => {
    setLoading(true);
    handleAnonymousSignIn();
    setLoading(false);
  }, []);

  */

/* // ** At this point, we have a session **
   if session && !email,
      prompt for email
   if session && email
      display email
      display category
      display start button
   2. Check if the current user has a profile
   3. If they do, display the normal page
   4. If they don't, display the email submission modal
   5. After the user submits their email, update the profile table with the email
   6. Display the normal page*/

/*
     //// Authenticate and Save Email
  async function authenticateAndSaveEmail(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setErrorMessage("");

    //// Fetch users to check if email is already taken
    //// see if current user has an email
    const { data: existingEmail, error: existingEmailErr } = await supabase
      .from("profiles")
      .select("username")
      .eq("username", values.email.split("@")[0])
      .single();

    existingEmail
      ? console.log("existing user", existingEmail)
      : console.log("existing user is null");

    // existingEmail ?
    //   yes
    //     Email is already taken
    //     setLoading(false)
    //     return
    //   no
    //     unique email entered
    //     update auth.user.email with values.email
    //     update profiles table with values.email and tie it to current anonUser
    //   other error
    //     setErrorMessage("An error occurred, please try again.")
    //// if we get an error and that error is NOT "JSON object requested, multiple (or no) rows returned", then we have a problem
    //// otherwise we have a unique user
    if (
      existingEmailErr &&
      existingEmailErr.message !==
        "JSON object requested, multiple (or no) rows returned"
    ) {
      setErrorMessage("An error occurred, please try again.");
      setLoading(false);
      return;
    } else {
      console.log("unique user entered!");
    }

    //// clear input box
    // form.setValue("email", "");

    if (existingEmail) {
      setErrorMessage("Email is already taken.");
      setLoading(false);
      return;
    }

    // TODO once we have a email, push it to the leaderboard database
    console.log("userCreated: ", userCreated);

    setLoading(false);
  }

  //// What I'd like handleSubmit() to look like
  async function handleSubmit() {
    setLoading(true);
    setErrorMessage("");
    form.setValue("email", "");

    await authenticateAndSaveEmail(form.getValues()); // Pass the values argument to the function.
    //  await updateAnonUser();
    //  await linkAnonUserToProfile();
    setLoading(false);
  }
  */
