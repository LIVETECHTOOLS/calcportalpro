'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Plus, 
  Trash2, 
  Calculator, 
  TrendingUp, 
  Award,
  Copy,
  Share2
} from 'lucide-react';
import Link from 'next/link';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
  isHonors: boolean;
  isAP: boolean;
}

interface GPAResults {
  unweightedGPA: number;
  weightedGPA: number;
  totalCredits: number;
  letterGrade: string;
  gpaScale: string;
}

const gradePoints: { [key: string]: number } = {
  'A+': 4.0, 'A': 4.0, 'A-': 3.7,
  'B+': 3.3, 'B': 3.0, 'B-': 2.7,
  'C+': 2.3, 'C': 2.0, 'C-': 1.7,
  'D+': 1.3, 'D': 1.0, 'D-': 0.7,
  'F': 0.0
};

const gradeOptions = Object.keys(gradePoints);

export default function GPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'Mathematics', grade: 'A', credits: 4, isHonors: false, isAP: false },
    { id: '2', name: 'English', grade: 'B+', credits: 4, isHonors: false, isAP: false },
    { id: '3', name: 'Science', grade: 'A-', credits: 4, isHonors: true, isAP: false },
  ]);
  const [results, setResults] = useState<GPAResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Calculate GPA whenever courses change
  const calculateGPA = useCallback(() => {
    if (courses.length === 0) {
      setResults(null);
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      let totalPoints = 0;
      let totalCredits = 0;
      let weightedTotalPoints = 0;

      courses.forEach(course => {
        const gradePoint = gradePoints[course.grade] || 0;
        const credits = course.credits;
        
        totalPoints += gradePoint * credits;
        totalCredits += credits;

        // Calculate weighted GPA
        let weightedGradePoint = gradePoint;
        if (course.isAP) {
          weightedGradePoint += 1.0; // AP classes get +1.0
        } else if (course.isHonors) {
          weightedGradePoint += 0.5; // Honors classes get +0.5
        }
        
        weightedTotalPoints += Math.min(weightedGradePoint, 5.0) * credits;
      });

      const unweightedGPA = totalCredits > 0 ? totalPoints / totalCredits : 0;
      const weightedGPA = totalCredits > 0 ? weightedTotalPoints / totalCredits : 0;

      // Determine letter grade
      let letterGrade = 'F';
      if (unweightedGPA >= 3.7) letterGrade = 'A';
      else if (unweightedGPA >= 3.3) letterGrade = 'A-';
      else if (unweightedGPA >= 3.0) letterGrade = 'B+';
      else if (unweightedGPA >= 2.7) letterGrade = 'B';
      else if (unweightedGPA >= 2.3) letterGrade = 'B-';
      else if (unweightedGPA >= 2.0) letterGrade = 'C+';
      else if (unweightedGPA >= 1.7) letterGrade = 'C';
      else if (unweightedGPA >= 1.3) letterGrade = 'C-';
      else if (unweightedGPA >= 1.0) letterGrade = 'D+';
      else if (unweightedGPA >= 0.7) letterGrade = 'D';

      // Determine GPA scale
      let gpaScale = 'Below Average';
      if (unweightedGPA >= 3.5) gpaScale = 'Excellent';
      else if (unweightedGPA >= 3.0) gpaScale = 'Good';
      else if (unweightedGPA >= 2.5) gpaScale = 'Above Average';
      else if (unweightedGPA >= 2.0) gpaScale = 'Average';

      setResults({
        unweightedGPA: Math.round(unweightedGPA * 100) / 100,
        weightedGPA: Math.round(weightedGPA * 100) / 100,
        totalCredits,
        letterGrade,
        gpaScale
      });
      setIsCalculating(false);
    }, 500);
  }, [courses]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      calculateGPA();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [calculateGPA]);

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: '',
      grade: 'A',
      credits: 4,
      isHonors: false,
      isAP: false
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const updateCourse = (
    id: string,
    field: keyof Course,
    value: string | number | boolean
  ) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const copyResults = () => {
    if (results) {
      const text = `My GPA Results:\nUnweighted GPA: ${results.unweightedGPA}\nWeighted GPA: ${results.weightedGPA}\nTotal Credits: ${results.totalCredits}\nLetter Grade: ${results.letterGrade}\nGPA Scale: ${results.gpaScale}`;
      navigator.clipboard.writeText(text);
    }
  };

  const shareResults = () => {
    if (results) {
      const text = `Check out my GPA: ${results.unweightedGPA} unweighted, ${results.weightedGPA} weighted! Calculated with CalcPortal Pro.`;
      if (navigator.share) {
        navigator.share({
          title: 'My GPA Results',
          text: text,
          url: window.location.href
        });
      } else {
        navigator.clipboard.writeText(text);
      }
    }
  };

  return (
    <div className="space-y-8">
      <div className="mb-6">
        <Link href="/calculators" className="text-primary-500 hover:text-primary-600 transition-colors">
          ← Back to Calculators
        </Link>
      </div>
      
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-secondary-600 mb-2">
          GPA Calculator
        </h2>
        <p className="text-gray-600">
          Calculate your weighted and unweighted Grade Point Average
        </p>
      </div>

      {/* Course Inputs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Your Courses</h3>
          <button
            type="button"
            onClick={addCourse}
            className="inline-flex items-center px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Course
          </button>
        </div>

        <div className="space-y-3">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                {/* Course Name */}
                <div className="md:col-span-4">
                  <input
                    type="text"
                    placeholder="Course Name"
                    value={course.name}
                    onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                {/* Grade */}
                <div className="md:col-span-2">
                  <select
                    value={course.grade}
                    onChange={(e) => updateCourse(course.id, 'grade', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    {gradeOptions.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                </div>

                {/* Credits */}
                <div className="md:col-span-2">
                  <input
                    type="number"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={course.credits}
                    onChange={(e) => updateCourse(course.id, 'credits', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                </div>

                {/* Honors/AP Checkboxes */}
                <div className="md:col-span-3 flex space-x-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={course.isHonors}
                      onChange={(e) => updateCourse(course.id, 'isHonors', e.target.checked)}
                      className="mr-2 text-accent-600 focus:ring-accent-500"
                    />
                    <span className="text-sm text-gray-700">Honors</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={course.isAP}
                      onChange={(e) => updateCourse(course.id, 'isAP', e.target.checked)}
                      className="mr-2 text-accent-600 focus:ring-accent-500"
                    />
                    <span className="text-sm text-gray-700">AP</span>
                  </label>
                </div>

                {/* Remove Button */}
                <div className="md:col-span-1">
                  <button
                    type="button"
                    onClick={() => removeCourse(course.id)}
                    className="w-full p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    disabled={courses.length === 1}
                  >
                    <Trash2 className="w-4 h-4 mx-auto" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-200"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-secondary-600 mb-2">
                Your GPA Results
              </h3>
              <p className="text-gray-600">
                Based on {results.totalCredits} total credits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Unweighted GPA */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calculator className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {results.unweightedGPA}
                </div>
                <div className="text-sm text-gray-600">Unweighted GPA</div>
              </div>

              {/* Weighted GPA */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-accent-600 mb-1">
                  {results.weightedGPA}
                </div>
                <div className="text-sm text-gray-600">Weighted GPA</div>
              </div>

              {/* Letter Grade */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-secondary-600" />
                </div>
                <div className="text-2xl font-bold text-secondary-600 mb-1">
                  {results.letterGrade}
                </div>
                <div className="text-sm text-gray-600">Letter Grade</div>
              </div>

              {/* GPA Scale */}
              <div className="bg-white rounded-xl p-4 text-center shadow-soft">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-lg font-bold text-green-600 mb-1">
                  {results.gpaScale}
                </div>
                <div className="text-sm text-gray-600">GPA Scale</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={copyResults}
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Results
              </button>
              <button
                type="button"
                onClick={shareResults}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Results
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading State */}
      <AnimatePresence>
        {isCalculating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-8"
          >
            <div className="inline-flex items-center space-x-2 text-accent-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-accent-600"></div>
              <span>Calculating your GPA...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <BookOpen className="h-5 w-5 text-blue-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Note:</strong> This calculator uses the standard 4.0 scale. AP classes add +1.0 points, 
              and Honors classes add +0.5 points to your weighted GPA. Always verify with your school's 
              specific grading policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
