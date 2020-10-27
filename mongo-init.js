db.createUser(
        {
            user: "unfraudedadmin",
            pwd: "unfraudedadmin",
            roles: [
                {
                    role: "readWrite",
                    db: "data-labeling"
                }
            ]
        }
);

