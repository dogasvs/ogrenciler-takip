const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eWl2aHhyZ3FvZHJnbGJ1a2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg0MTgzMTAsImV4cCI6MjA0Mzk5NDMxMH0.VZQdrJZBdL6_ZGqqEANDWbRG4b4RaqOZs4Q8YcM23-U"

export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}