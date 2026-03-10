import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Sky Residences",
    location: "South Mumbai",
    price: "Rs. 4 Cr onwards",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=85",
  },
  {
    title: "The Crest",
    location: "Whitefield, Bengaluru",
    price: "Rs. 1.8 Cr onwards",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=85",
  },
  {
    title: "Horizon Towers",
    location: "Sector 54, Gurugram",
    price: "Rs. 8 Cr onwards",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85",
  },
  {
    title: "The Pinnacle",
    location: "Banjara Hills, Hyderabad",
    price: "Rs. 3.2 Cr onwards",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=85",
  },
];

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const target = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    const timer = setInterval(() => {
      const diff = target - new Date();
      setDays(Math.floor(diff / 86400000));
      setHours(Math.floor((diff % 86400000) / 3600000));
      setMins(Math.floor((diff % 3600000) / 60000));
      setSecs(Math.floor((diff % 60000) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #060514 0%, #0d0c22 100%)",
      fontFamily: "'Segoe UI', sans-serif",
      color: "#fff",
    }}>

      {/* Hero */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px 60px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 560 }}>

          <div style={{
            display: "inline-block",
            border: "1px solid rgba(212,175,55,0.4)",
            color: "#d4af37",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            padding: "5px 18px",
            borderRadius: 100,
            marginBottom: 28,
          }}>
            Coming Soon
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Traph<span style={{ color: "#d4af37" }}>Housing</span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: 16,
            lineHeight: 1.8,
            marginBottom: 40,
          }}>
            Premium real estate is coming to your city.<br />
            Be the first to know when we launch.
          </p>

          {/* Countdown */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            marginBottom: 44,
            flexWrap: "wrap",
          }}>
            {[["Days", days], ["Hours", hours], ["Mins", mins], ["Secs", secs]].map(([label, val]) => (
              <div key={label} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: 12,
                padding: "18px 24px",
                minWidth: 80,
              }}>
                <div style={{ color: "#d4af37", fontSize: 32, fontWeight: 800, lineHeight: 1 }}>
                  {String(val).padStart(2, "0")}
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 10, letterSpacing: 2, marginTop: 6, textTransform: "uppercase" }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Email */}
          {submitted ? (
            <div style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.3)",
              color: "#22c55e",
              padding: "14px 24px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
            }}>
              You are on the list. We will notify you at launch.
            </div>
          ) : (
            <div style={{ display: "flex", gap: 8, maxWidth: 420, margin: "0 auto" }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8,
                  padding: "12px 16px",
                  color: "#fff",
                  fontSize: 14,
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
              <button
                onClick={() => email.includes("@") && setSubmitted(true)}
                style={{
                  background: "linear-gradient(135deg, #d4af37, #c9903e)",
                  color: "#0a0a0a",
                  border: "none",
                  borderRadius: 8,
                  padding: "12px 22px",
                  fontSize: 13,
                  fontWeight: 800,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Notify Me
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "0 20px 60px",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 44,
        }}>
          <div style={{ width: 60, height: 1, background: "rgba(212,175,55,0.25)" }} />
          <span style={{
            color: "#d4af37",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}>
            Project Preview
          </span>
          <div style={{ width: 60, height: 1, background: "rgba(212,175,55,0.25)" }} />
        </div>

        <p style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: 14,
          marginBottom: 36,
          lineHeight: 1.8,
        }}>
          A glimpse of what is coming. Full details revealed at launch.
        </p>

        {/* Project grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
        }}>
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                border: hovered === i
                  ? "1px solid rgba(212,175,55,0.5)"
                  : "1px solid rgba(255,255,255,0.07)",
                cursor: "pointer",
                transition: "border-color 0.3s, transform 0.3s",
                transform: hovered === i ? "translateY(-4px)" : "none",
              }}
            >
              {/* Blurred image */}
              <div style={{
                height: 200,
                backgroundImage: `url(${p.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: hovered === i ? "blur(3px) brightness(0.5)" : "blur(8px) brightness(0.4)",
                transform: "scale(1.08)",
                transition: "filter 0.4s",
              }} />

              {/* Lock icon when not hovered */}
              {hovered !== i && (
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -60%)",
                  fontSize: 22,
                  opacity: 0.5,
                }}>
                  🔒
                </div>
              )}

              {/* Info overlay */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                background: "linear-gradient(to top, rgba(6,5,20,0.97) 0%, rgba(6,5,20,0.6) 70%, transparent 100%)",
                padding: "20px 16px 16px",
              }}>
                <div style={{
                  color: hovered === i ? "#d4af37" : "rgba(212,175,55,0.5)",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginBottom: 4,
                  transition: "color 0.3s",
                }}>
                  {hovered === i ? p.location : "Location Confidential"}
                </div>
                <div style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 4 }}>
                  {hovered === i ? p.title : "Revealed at Launch"}
                </div>
                <div style={{
                  color: hovered === i ? "#d4af37" : "rgba(255,255,255,0.2)",
                  fontSize: 12,
                  fontWeight: 600,
                  transition: "color 0.3s",
                }}>
                  {hovered === i ? p.price : "Price on Request"}
                </div>
              </div>

              {/* Hover badge */}
              {hovered === i && (
                <div style={{
                  position: "absolute",
                  top: 12, right: 12,
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "#d4af37",
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  padding: "3px 10px",
                  borderRadius: 100,
                  textTransform: "uppercase",
                }}>
                  Preview
                </div>
              )}
            </div>
          ))}
        </div>

        <p style={{
          color: "rgba(255,255,255,0.15)",
          fontSize: 11,
          marginTop: 48,
        }}>
          TraphHousing.com
        </p>
      </div>

    </div>
  );
}