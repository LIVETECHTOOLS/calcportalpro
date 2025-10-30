'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Plus, Trash2, Target, TrendingUp, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface GradeItem {
  id: string;
  name: string;
  grade: number;
  weight: number;
}

interface GradeResult {
  currentGrade: number;
  targetGrade: number;
  neededOnFinal: number;
  letterGrade: string;
  gradePoints: number;
}

export default function GradeCalculator() {
  const [gradeItems, setGradeItems] = useState<GradeItem[]>([
    { id: '1', name: 'Homework', grade: 90, weight: 20 },
    { id: '2', name: 'Quizzes', grade: 85, weight: 25 },
    { id: '3', name: 'Midterm', grade: 88, weight: 25 },
    { id: '4', name: 'Final Exam', grade: 0, weight: 30 },
  ]);

  const [targetGrade, setTargetGrade] = useState(90);
  const [results, setResults] = useState<GradeResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateGrade = (items: GradeItem[], target: number): GradeResult => {
    let totalWeight = 0;
    let weightedSum = 0;
    let finalExamWeight = 0;
    let finalExamGrade = 0;

    // Calculate current weighted grade (excluding final exam)
    items.forEach(item => {
      if (item.name.toLowerCase().includes('final')) {
        finalExamWeight = item.weight;
        finalExamGrade = item.grade;
      } else {
        totalWeight += item.weight;
        weightedSum += (item.grade * item.weight);
      }
    });

    const currentGrade = totalWeight > 0 ? weightedSum / totalWeight : 0;
    
    // Calculate what's needed on final exam
    let neededOnFinal = 0;
    if (finalExamWeight > 0) {
      const remainingWeight = 100 - totalWeight;
      const neededTotal = target;
      const currentContribution = (currentGrade * totalWeight) / 100;
      neededOnFinal = ((neededTotal - currentContribution) / (remainingWeight / 100));
    }

    // Determine letter grade
    const getLetterGrade = (grade: number): string => {
      if (grade >= 93) return 'A';
      if (grade >= 90) return 'A-';
      if (grade >= 87) return 'B+';
      if (grade >= 83) return 'B';
      if (grade >= 80) return 'B-';
      if (grade >= 77) return 'C+';
      if (grade >= 73) return 'C';
      if (grade >= 70) return 'C-';
      if (grade >= 67) return 'D+';
      if (grade >= 63) return 'D';
      if (grade >= 60) return 'D-';
      return 'F';
    };

    // Calculate grade points (4.0 scale)
    const getGradePoints = (grade: number): number => {
      if (grade >= 93) return 4.0;
      if (grade >= 90) return 3.7;
      if (grade >= 87) return 3.3;
      if (grade >= 83) return 3.0;
      if (grade >= 80) return 2.7;
      if (grade >= 77) return 2.3;
      if (grade >= 73) return 2.0;
      if (grade >= 70) return 1.7;
      if (grade >= 67) return 1.3;
      if (grade >= 63) return 1.0;
      if (grade >= 60) return 0.7;
      return 0.0;
    };

    return {
      currentGrade: Math.round(currentGrade * 100) / 100,
      targetGrade: target,
      neededOnFinal: Math.round(neededOnFinal * 100) / 100,
      letterGrade: getLetterGrade(currentGrade),
      gradePoints: getGradePoints(currentGrade),
    };
  };

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => {
      const calculatedResults = calculateGrade(gradeItems, targetGrade);
      setResults(calculatedResults);
      setIsCalculating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [gradeItems, targetGrade]);

  const addGradeItem = () => {
    const newItem: GradeItem = {
      id: Date.now().toString(),
      name: 'New Assignment',
      grade: 0,
      weight: 10,
    };
    setGradeItems([...gradeItems, newItem]);
  };

  const removeGradeItem = (id: string) => {
    if (gradeItems.length > 1) {
      setGradeItems(gradeItems.filter(item => item.id !== id));
    }
  };

  const updateGradeItem = (id: string, field: keyof GradeItem, value: string | number) => {
    setGradeItems(gradeItems.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const totalWeight = gradeItems.reduce((sum, item) => sum + item.weight, 0);

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <Link href="/calculators" className="text-primary-500 hover:text-primary-600 transition-colors">
          <BookOpen className="w-4 h-4 mr-2" /> Back to Calculators
        </Link>
      </div>
      
      {/* Input Form */}
      <div className="card p-6">
        <h3 className="text-xl font-bold text-secondary-500 mb-6 flex items-center">
          <Calculator className="w-5 h-5 mr-2" />
          Grade Inputs
        </h3>
        
        <div className="space-y-4">
          {/* Target Grade */}
          <div className="bg-primary-50 rounded-lg p-4">
            <label className="block text-sm font-medium text-primary-700 mb-2">
              Target Final Grade (%)
            </label>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-primary-600" />
              <input
                type="number"
                value={targetGrade}
                onChange={(e) => setTargetGrade(parseFloat(e.target.value) || 0)}
                className="input-field max-w-xs"
                placeholder="90"
                min="0"
                max="100"
                step="0.1"
              />
            </div>
          </div>

          {/* Grade Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-secondary-500">Assignments & Grades</h4>
              <button
                onClick={addGradeItem}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <Plus size={16} />
                <span>Add Item</span>
              </button>
            </div>

            {gradeItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <label className="block text-sm font-medium text-secondary-500 mb-1">
                    Assignment Name
                  </label>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => updateGradeItem(item.id, 'name', e.target.value)}
                    className="input-field"
                    placeholder="Assignment name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-500 mb-1">
                    Grade (%)
                  </label>
                  <input
                    type="number"
                    value={item.grade}
                    onChange={(e) => updateGradeItem(item.id, 'grade', parseFloat(e.target.value) || 0)}
                    className="input-field"
                    placeholder="0"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-500 mb-1">
                    Weight (%)
                  </label>
                  <input
                    type="number"
                    value={item.weight}
                    onChange={(e) => updateGradeItem(item.id, 'weight', parseFloat(e.target.value) || 0)}
                    className="input-field"
                    placeholder="0"
                    min="0"
                    max="100"
                    step="0.1"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => removeGradeItem(item.id)}
                    disabled={gradeItems.length <= 1}
                    className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Weight Total Warning */}
            {totalWeight !== 100 && (
              <div className={`p-3 rounded-lg ${
                totalWeight > 100 ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'
              }`}>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">
                    Total Weight: {formatPercentage(totalWeight)}
                  </span>
                  {totalWeight > 100 ? (
                    <span>⚠️ Total weight exceeds 100%</span>
                  ) : (
                    <span>ℹ️ Total weight should equal 100%</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="card p-6">
        <h3 className="text-xl font-bold text-secondary-500 mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Grade Results
        </h3>
        
        <AnimatePresence mode="wait">
          {isCalculating ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto"></div>
              <p className="text-secondary-100 mt-2">Calculating...</p>
            </motion.div>
          ) : results ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Summary Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-sm text-primary-600 font-medium">Current Grade</div>
                  <div className="text-2xl font-bold text-primary-700">
                    {formatPercentage(results.currentGrade)}
                  </div>
                  <div className="text-sm text-primary-600">
                    {results.letterGrade} ({results.gradePoints.toFixed(1)} GPA)
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-sm text-green-600 font-medium">Target Grade</div>
                  <div className="text-2xl font-bold text-green-700">
                    {formatPercentage(results.targetGrade)}
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-sm text-blue-600 font-medium">Needed on Final</div>
                  <div className="text-2xl font-bold text-blue-700">
                    {results.neededOnFinal > 0 ? formatPercentage(results.neededOnFinal) : 'N/A'}
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-sm text-purple-600 font-medium">Total Weight</div>
                  <div className="text-2xl font-bold text-purple-700">
                    {formatPercentage(totalWeight)}
                  </div>
                </div>
              </div>

              {/* Grade Analysis */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-secondary-500 mb-3">Grade Analysis</h4>
                <div className="space-y-2 text-sm text-secondary-100">
                  {results.currentGrade >= results.targetGrade ? (
                    <p className="text-green-600 font-medium">
                      🎉 You're on track to achieve your target grade!
                    </p>
                  ) : (
                    <p className="text-orange-600 font-medium">
                      📚 You need to improve by {formatPercentage(results.targetGrade - results.currentGrade)} to reach your target.
                    </p>
                  )}
                  
                  {results.neededOnFinal > 0 && results.neededOnFinal <= 100 && (
                    <p className="text-blue-600">
                      To reach {formatPercentage(results.targetGrade)}, you need at least {formatPercentage(results.neededOnFinal)} on your final exam.
                    </p>
                  )}
                  
                  {results.neededOnFinal > 100 && (
                    <p className="text-red-600">
                      ⚠️ It's mathematically impossible to reach {formatPercentage(results.targetGrade)} with the current grades and weights.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
