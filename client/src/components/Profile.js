import React from 'react';

const ProfilePage = () => {
    // Add an event listener to remove the scrollbar
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <div style={styles.imageContainer}>
                    <img src="https://via.placeholder.com/150" alt="Profile" style={styles.image} />
                </div>
                <div style={{ ...styles.details, ...styles.hoverEffect }}>
                    <h2 style={styles.name}>Neeraj Kumar</h2>
                    <p style={styles.info}>Email: neeraj@test.com</p>
                    <p style={styles.info}>Phone: 8667675455</p>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: 'relative',
        minHeight: '100vh',
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/08/25/11/50/shop-906722_640.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    content: {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    },
    imageContainer: {
        marginBottom: '20px',
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
    },
    details: {
        textAlign: 'center',
        transition: 'transform 0.3s ease',
    },
    hoverEffect: {
        cursor: 'pointer',
    },
    name: {
        marginBottom: '10px',
        fontSize: '24px',
        fontWeight: '',
    },
    info: {
        marginBottom: '5px',
        fontSize: '16px',
    },
};

export default ProfilePage;
    