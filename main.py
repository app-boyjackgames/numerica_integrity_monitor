from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def analyze_number(n):
    if n < 1:
        return None
    
    divisors = [i for i in range(1, n) if n % i == 0]
    sum_divisors = sum(divisors)
    
    properties = []
    
    # Perfect, Abundant, Deficient
    if sum_divisors == n:
        properties.append("Perfect")
    elif sum_divisors > n:
        properties.append("Abundant")
    else:
        properties.append("Deficient")
        
    # Prime, Composite
    if n > 1:
        is_prime = True
        for i in range(2, int(n**0.5) + 1):
            if n % i == 0:
                is_prime = False
                break
        if is_prime:
            properties.append("Prime")
        else:
            properties.append("Composite")
    elif n == 1:
        properties.append("Unit")

    return {
        "number": n,
        "divisors": divisors,
        "sum_divisors": sum_divisors,
        "properties": properties
    }

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()
        num = int(data.get('number'))
        result = analyze_number(num)
        return jsonify(result)
    except (ValueError, TypeError):
        return jsonify({"error": "Invalid number"}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
